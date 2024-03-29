export const Color = {
  orange: '#F69904',
  background: '#F2F4F9',
  black: '#0D0446',
  blackO: '#0D044680',
  white: '#FFFFFF',
  white0: '#FFFFFF98',
  purple: '#7065E3',
  lightPurple: '#7065E380',
  shadow: '#7090b0',
  yellow: '#f9ca27',
  green: '#16bc85',
  red: '#DC143C',
  blue: '#4285f4',
  darkYellow: '#bca227',
  ligthYellow: '#e0e01417',
  darkGreen: '#16bc85',
  lightGreen: '#14e09c17',
  titleBlack: '#2a3845',
  detailsGray: '#838589',
  lightwhite: '#ffffff70',
  darkBlue: '#161cbc',
  lightBlue: '#141ce017',
  darkRed: '#bc3616',
  lightRed: '#e0141417',
  bgGray: '#f7f8fb',
  shadowColor: '#7090b0',
  transperent: '#00000040',
  borderColor: '#E2E7F0',
  disableColor: '#2a384530',
  golden: '#FDEB0B',
  gray: '#778899',
  darkOrange:'#F4511E',
  lightOrange:'#f6b26bff',
  accentOrange:'#ff9900ff'
};
export const keyboardType = {
  default: 'default',
  numberPad: 'number-pad',
  decimalPad: 'decimal-pad',
  numeric: 'numeric',
  emailAddress: 'email-address',
  phonePad: 'phone-pad',
};
export const maxLength = {
  phoneNumber: 10,
  password: 21,
  name: 40,
  email: 40,
  address: 120,
  otp: 4,
  measurment: 150,
  quantity: 4,
};
export const Message = {
  DataFail: 'Data Fail',
  DataNotFound: 'Data Not Found',
  CustomerNotFound: 'Customer Not Found',
  OrderNotFound: 'Order Not Found',
  SomethingWrong: 'Something went wrong, check your internet.',
  InternetNotConnet: 'Internet not connected',
  CreateAccount:
    'For create your new account please contect with our admin using this 8733986867.',
  Logout: 'Are you sure you want to logout.',
  OnlyCharacters: 'only characters allowed',
  OnlyNumbers: 'only number allowed',
  EmailExample: 'example : something@gmail.com',
};
export const SuccessMessage = {
  loginSuccessfully: 'Login Successfull',
};
export const StoreDataKeys = {
  UserDetails: 'UserDetails',
  DeviceToken: 'DeviceToken',
  apiTocken: 'DeviceToken',
  fcmToken: 'fcmToken'
};
export const ScreenName = {
  Launch: 'Launch',
  Login: 'Login',
  Dashboard: 'Dashboard',
  Profile: 'Profile',
  TabNavigation: 'TabNavigation',
  Gallery: 'Gallery',
  Studants: 'Studants',
  Fees: 'Fees',
  FeesDetails: 'FeesDetails',
  TimeTable: 'TimeTable',
  Event: 'Event',
  Splash: 'Splash',
  Diary: 'Diary',
  Result: 'Result',
  Bus: 'Bus',
  Feedback: 'Feedback',
  FeedbackDetails: 'FeedbackDetails',
  FeedbackForm: 'FeedbackForm',
  Leaves: 'Leaves',
  LeaveScreen: 'LeaveScreen',
  Notifications: 'Notifications',
  NotificationDetails: 'NotificationDetails',
  PTM:'PTM',
  PtmDetails: 'PtmDetails',
};
export const RecoilKeys = {
  UserDetails: 'UserDetails',
};
export const DashboardData = [
  {title: 'PTM',description: '',image: 'school',color: Color.blue},
  {title: 'Events', description: '', image: 'logo-slack', color: Color.green},
  {title: 'Fees', description: '', image: 'receipt-sharp', color: Color.darkRed},
  {title: 'Timetable',description: '',image: 'ios-calendar',color: Color.purple},
  {title: 'Leaves', description: '', image: 'home', color: Color.detailsGray},
  {title: 'Feedback',description: '',image: 'chatbubble-ellipses',color: Color.blue},
  {title: 'Result', description: '', image: 'document-text', color: Color.darkRed},
  {title: 'Bus',description: '',image: 'bus-sharp',color: Color.yellow},
  {title: 'Diary', description: '', image: 'ios-book', color: Color.red},
  {title: 'Notifications', description: '', image: 'notifications', color: Color.orange},
];
