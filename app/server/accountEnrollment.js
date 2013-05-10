Accounts.emailTemplates.siteName = "Epkit";
Accounts.emailTemplates.from = "Epkit Admin <admin@epkit.com>";
Accounts.emailTemplates.enrollAccount.subject = function (user) {
  return "Welcome to Epkit, " + user.profile.name;
};
Accounts.emailTemplates.enrollAccount.text = function (user, url) {
  return "You have been selected to participate in Epkit's early access program!"
    + " To activate your account, simply click the link below:\n\n"
    + url;
};