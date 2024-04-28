import { Route, Routes } from "react-router-dom";
import { Splash } from "./pages/splash";
import { Onboarding } from "./pages/Onboarding";
import { Auth } from "./pages/Auth";
import { Review } from "./pages/Review";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { PixMain } from "./pages/Pix_main";
import { PixTransfer } from "./pages/Pix_transfer";
import { TransferInfos } from "./pages/Pix_transferInfos";
import { PixCharge } from "./pages/Pix_charge";
import { PixPay } from "./pages/Pix_pay";
import { PixPayInfos } from "./pages/Pix_payInfos/Index";
import { ConfirmPay } from "./pages/Pix_ConfirmPay";
import { PixKeys } from "./pages/Pix_keys";
import { CardMain } from "./pages/Card_main";
import { CardInvoice } from "./pages/Card_invoice";
import { CardLimit } from "./pages/Card_limit";
import { LimitReview } from "./pages/Card_limitReview";
import { LoanMain } from "./pages/Loan_main";
import { LoanSimulate } from "./pages/Loan_simulate";
import { LoanGenerate } from "./pages/Loan_generate";
import { LoanPay } from "./pages/Loan_Pay";
import { PixContacts } from "./pages/Pix_Contacts";
import { Profile } from "./pages/Profile";

export const Bank = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboard" element={<Onboarding />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/review" element={<Review />} />
      <Route path="/login" element={<Login />} />
      <Route path="/init" element={<Dashboard />} />
      <Route path="/pix" element={<PixMain />} />
      <Route path="/pix/transfer" element={<PixTransfer />} />
      <Route path="/pix/transfer/:id" element={<PixTransfer />} />
      <Route path="/pix/transfer/infos" element={<TransferInfos />} />
      <Route path="/pix/charge" element={<PixCharge />} />
      <Route path="/pix/pay" element={<PixPay />} />
      <Route path="/pix/pay/infos" element={<PixPayInfos />} />
      <Route path="/confirmPay" element={<ConfirmPay />} />
      <Route path="/pix/contacts" element={<PixContacts />} />
      <Route path="/pix/keys" element={<PixKeys />} />
      <Route path="/card" element={<CardMain />} />
      <Route path="/card/invoice" element={<CardInvoice />} />
      <Route path="/card/limitAdjust" element={<CardLimit />} />
      <Route path="/card/limitReview" element={<LimitReview />} />
      <Route path="/loan" element={<LoanMain />} />
      <Route path="/loan/simulate" element={<LoanSimulate />} />
      <Route path="/loan/generate" element={<LoanGenerate />} />
      <Route path="/loan/pay" element={<LoanPay />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
