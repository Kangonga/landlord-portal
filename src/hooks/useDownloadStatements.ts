interface statementProps {
  account: any;
  userId: any;
  token: any;
  from: string;
  to: string;
}
export default async function getDownloadStatements({
  account,
  userId,
  token,
  from,
  to,
}: statementProps) {
  const url = "https://ss.m-paya.net/api.php?src=dashboard";
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api: {
        request: "viewStatement",
        user: userId,
        token: token,
      },
      input: {
        from: from,
        to: to,
        account: account,
      },
    }),
  };

  const result = await fetch(url, params);
  const blob = await result.blob();
  const newurl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = newurl;
  link.setAttribute("download", `${Date.now()}.xlsx`);
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(newurl);
}
