#!/bin/bash

  #cd adb
#pwd
#pwd
#./adb devices
#STRING=" This is to inform you that has met with an accident at"
#./adb shell input tap 1000 1700
#adb shell input tap 713 1825

#./adb shell input tap 1000 1700

#adb shell input tap 713 1825
#adb shell am start -a android.intent.action.SENDTO -d sms:8149755616 --es sms_body " This is to inform you that  having license plate no has met with an accident at [lat: and long:] at  on  "  --ez exit_on_sent true
#adb shell input tap 713 1825

#./adb shell am start -a android.intent.action.SENDTO -d sms:9754754185 --es sms_body " This is to inform you that $2 having license plate no $3 has met with an accident at [lat:$4 and long:$5] at $10 on $6 $7 $8 $9 "  --ez exit_on_sent true
#./adb shell input tap 1000 1700
#./adb shell am start -a android.intent.action.SENDTO -d sms:9754754185 --es sms_body " This is to inform you that $2 having license plate no $3 has met with an accident at [lat:$4 and long:$5] at $10 on $6 $7 $8 $9 "  --ez exit_on_sent true
#./adb shell input tap 1000 1700
#./adb shell am start -a android.intent.action.SENDTO -d sms:9754754185 --es sms_body "Your daughter has smashed the car" --ez exit_on_sent true
#./adb shell input tap 1000 1700
#./adb shell am start -a android.intent.action.SENDTO -d sms:9633799861 --es sms_body " $1 !" --ez exit_on_sent true
#./adb shell input tap 1000 1700
#adb shell am start -a android.intent.action.SENDTO -d sms:9176261226 --es sms_body "His name is $1 !" --ez exit_on_sent true
#adb shell input tap 751 1777
#adb shell input tap 965 1781
#adb shell input tap 1011 865

#./adb shell input tap 1000 1700
#adb shell service call isms 7 i32 0 s16 "com.android.mms.service" s16 "+919176261226" s16 "null" s16 "Hey\ you\ !" s16 "null" s16 "null"
#adb shell am start -a android.intent.action.SENDTO   --es sms_body " This is to inform you that  having license plate no has met with an accident at [lat: and long:] at  on  "  --ez exit_on_sent true

#adb shell input text "sampletexthere"

adb shell am start -a android.intent.action.SENDTO -d sms:9176261226
#adb shell am start -a android.intent.action.SENDTO -d sms:+1-222-333-4444 --es sms_body " This is to inform you that  having license plate no has met with an accident at [lat: and long:] at  on  "  --ez exit_on_sent true
#adb shell input text "This is to inform you that $2 having license plate no $3 has met with an accident at [lat:$4 and long:$5] at $10 on $6 $7 $8 $9"

#adb shell am start -a android.intent.action.SENDTO -d sms:"$1" --es sms_body "$2"  --ez exit_on_sent true

#adb shell input text "This is to inform you that having license plate no has met with an accident"
adb shell input text "Accident"
adb shell input tap 751 1777
adb shell input tap 965 1781
adb shell input tap 1011 865



# adb shell am start -a android.intent.action.SENDTO -d sms:9176261226
# # adb shell input text "This is to inform you that having license plate no has met with an accident"
# adb shell input text "hello"
# adb shell input tap 751 1777
# adb shell input tap 965 1781
# #adb shell input tap  529 918
#
#
# #adb shell input tap 990 900
# adb shell input tap 1011 865
