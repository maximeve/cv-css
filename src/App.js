// import LoginScreen from './screens/LoginScreen'
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import { Routes, Route } from "react-router-dom";
import Editor from "./screens/Editor";
import SuccessPage from "./screens/SuccessPage";
import AccountPage from "./screens/AccountPage";
import CredentialsPage from './screens/Account/CredentialsPage';
import TokensPage from './screens/Account/TokensPage';
import TransactionsPage from './screens/Account/TransactionsPage';
import QuestionsPage from './screens/Account/QuestionsPage';
import BuyTokens from "./screens/BuyTokens";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="create" element={<Editor />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="buy" element={<BuyTokens />} />
        <Route path="account" element={<AccountPage />}>
          <Route path="credentials" element={<CredentialsPage />} />
          <Route path="tokens" element={<TokensPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="questions" element={<QuestionsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
