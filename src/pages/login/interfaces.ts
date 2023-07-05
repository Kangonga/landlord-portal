export interface formInterface {
  phone: string;
  password: string;
  keepLoggedIn: boolean;
}

interface paymentsOut {
  mmId: string;
  pId: string;
  paytime: string;
  accNo: string;
  accName: string;
  amount: string;
  message: string;
}
export interface apiResult {
  data: {
    user: number;
    token: string;
  };
  status: number;
  statusDesc: string;
}

export interface motherMeterInterface {
  [number: string]: {
    mmId: number;
    buildingNo: string;
    accNo: string;
    accName: string;
    accType: string;
    utilityType: string;
    regDate: string;
    sm: subMeterInterface;
    payments?: paymentsOut;
  };
}
interface subMeterInterface {
  [name: string]: {
    mmId: number;
    smId: number;
    meterNo: string;
    type: number;
    regDate: string;
    payments: payment[];
  };
}
interface payment {
  mmId: number;
  smId: number;
  pId: number;
  paytime: string;
  txId: string;
  phone: string | null;
  payer: string | null;
  smNo: string;
  amount: string | null;
  token: string | null;
  units: string | null;
  paybill: number;
}

export interface dashboardInterface {
  data: {
    Names: string;
    phone1: number | null;
    phone2: number | null;
    email: string | null;
    address: string | null;
    nationalID: string | null;
    regDate: string | null;
    mm: motherMeterInterface[];
  };
  status: number;
  statusDesc: string;
}
