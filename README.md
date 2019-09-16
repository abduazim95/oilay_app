# Oilay APP

## React native CLI installation
> npm install -g react-native-cli

## Install Android Studio
Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM) (See here for AMD)
- Android Virtual Device

## Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:
- Android SDK Platform 28
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

## Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the System pane under System and Security in the Windows Control Panel, then click on **Change settings....** Open the **Advanced** tab and click on **Environment Variables....** Click on **New...** to create a new ANDROID_HOME user variable that points to the path to your Android SDK

The SDK is installed, by default, at the following location:
> c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk

You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under 

**Appearance & Behavior → System Settings → Android SDK.**

## Add platform-tools to Path
Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Select the Path variable, then click Edit. Click New and add the path to platform-tools to the list.

The default location for this folder is:
> c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools

## List of attached devices
> adb devices

## Start React-native application
> react-native run-android
