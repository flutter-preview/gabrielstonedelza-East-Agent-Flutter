import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:get_storage/get_storage.dart';
import 'package:http/http.dart' as http;
import 'package:get/get.dart';

import '../../constants.dart';
import '../../widgets/loadingui.dart';

class PayToAgentSummaryDetail extends StatefulWidget {
  final date_added;
  const PayToAgentSummaryDetail({Key? key, this.date_added})
      : super(key: key);

  @override
  _PayToAgentSummaryDetailState createState() =>
      _PayToAgentSummaryDetailState(date_added: this.date_added);
}

class _PayToAgentSummaryDetailState extends State<PayToAgentSummaryDetail> {
  final date_added;
  _PayToAgentSummaryDetailState({required this.date_added});
  final storage = GetStorage();
  bool hasToken = false;
  late String uToken = "";
  bool isLoading = true;
  late var items;
  late List date_added_for_agent = [];
  late List allPayToForAgent = [];
  double sum = 0.0;

  fetchAllPayTo()async{
    const url = "https://fnetagents.xyz/get_all_my_pay_to/";
    var myLink = Uri.parse(url);
    final response = await http.get(myLink, headers: {
      "Authorization": "Token $uToken"
    });

    if(response.statusCode ==200){
      final codeUnits = response.body.codeUnits;
      var jsonData = const Utf8Decoder().convert(codeUnits);
      allPayToForAgent = json.decode(jsonData);

      for(var i in allPayToForAgent){
        if(i['pay_to_type'] == "Agent"){
          if (i['date_added'].toString().split("T").first == date_added) {
            date_added_for_agent.add(i);
            sum = sum + double.parse(i['amount']);
          }
        }
      }
    }

    setState(() {
      isLoading = false;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    if (storage.read("token") != null) {
      setState(() {
        hasToken = true;
        uToken = storage.read("token");
      });
    }
    fetchAllPayTo();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: secondaryColor,
        title: Text("Details for $date_added"),
      ),
      body: SafeArea(
          child: isLoading
              ? const LoadingUi()
              : ListView.builder(
              itemCount: date_added_for_agent != null ? date_added_for_agent.length : 0,
              itemBuilder: (context, i) {
                items = date_added_for_agent[i];
                return Column(
                  children: [
                    const SizedBox(
                      height: 20,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 8.0, right: 8),
                      child: Card(
                        color: secondaryColor,
                        elevation: 12,
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10)),
                        // shadowColor: Colors.pink,
                        child: Padding(
                          padding:
                          const EdgeInsets.only(top: 18.0, bottom: 18),
                          child: ListTile(
                            title: buildRow("Customer: ", "customer"),
                            subtitle: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                buildRow("Amount : ", "amount"),
                                Padding(
                                  padding: const EdgeInsets.only(left: 8.0,top: 2),
                                  child: Row(
                                    children: [
                                      const Text("Date : ", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
                                      ),
                                      Text(items['date_added'].toString().split("T").first, style: const TextStyle(
                                          fontSize: 14, fontWeight: FontWeight.bold, color: Colors.white),
                                      ),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(left: 8.0,top: 2),
                                  child: Row(
                                    children: [
                                      const Text("Time : ", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
                                      ),
                                      Text(items['date_added'].toString().split("T").last.toString().split(".").first, style: const TextStyle(
                                          fontSize: 14, fontWeight: FontWeight.bold, color: Colors.white),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          )
                        ),
                      ),
                    )
                  ],
                );
              })),
      floatingActionButton: !isLoading
          ? FloatingActionButton(
        backgroundColor: snackBackground,
        child: const Text("Total"),
        onPressed: () {
          Get.defaultDialog(
            buttonColor: secondaryColor,
            title: "Total",
            middleText: "$sum",
            confirm: RawMaterialButton(
                shape: const StadiumBorder(),
                fillColor: secondaryColor,
                onPressed: () {
                  Get.back();
                },
                child: const Text(
                  "Close",
                  style: TextStyle(color: Colors.white),
                )),
          );
        },
      )
          : Container(),
    );
  }

  Padding buildRow(String mainTitle,String subtitle) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        children: [
          Text(mainTitle, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
          ),
          Text(items[subtitle].toString(), style: const TextStyle(
              fontSize: 14, fontWeight: FontWeight.bold, color: Colors.white),
          ),
        ],
      ),
    );
  }
}
