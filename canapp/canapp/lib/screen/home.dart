import 'package:flutter/material.dart';
import 'package:webview_flutter_plus/webview_flutter_plus.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
 Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Stack(
          children: [
            WebViewPlus(
              javascriptMode: JavascriptMode.unrestricted,
              initialUrl: 'https://canteen-website-shinjan.vercel.app/',
             
            ),
           
          ],
        ),
      ),
    );
  }
}
