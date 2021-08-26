# paddy-fbsdk

## 🐛 Bug Report

  When I install lib in my project the whole app feels laggy, UI frame rate drops tp 10 fps or even below that. 
  If I remove lib from my project App runs at 60+ fps 
  
  When I have lib install in project 
![Screenshot_2021-08-25-11-14-54-900_com apnaklub](https://user-images.githubusercontent.com/22058036/130914456-f3c35e0c-3f02-4ac6-9505-0c2946c320a7.jpg)


## To Reproduce

  Steps to reproduce the behavior.
  1. Install lib 
  2.Follow all given procedure 
  3.Have a simple flat list which will render text component 
  4.Scroll through It
  
  App feels laggy and UI Frames drops to 10 fps


## Expected Behavior

 App Should not feel laggy and UI Frame rate should be more than 50 fps


## Code Example

https://github.com/paddy57/paddy-fbsdk


## Environment

  Run `react-native info` in your terminal and copy the results here.
    "react": "16.13.1",
    "react-native": "0.63.4",
    "react-native-fbsdk-next": "^4.3.0",

