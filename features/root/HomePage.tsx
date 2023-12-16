import React from "react";
import { Button, ConfigProvider, Typography } from "antd";

import theme from "@/theme/themeConfig";
import Link from "next/link";
import { pagesPath } from "@/lib/$path";

async function get() {
  "use server";
  const res = await fetch("http://localhost:3000/user", {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

const HomePage = async () => {
  const res = (await get()).data;
  console.log(res);

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        {res.map((item: { name: string }) => (
          <div>
            <Typography>{item.name}</Typography>
          </div>
        ))}
        <Link href={pagesPath.form.$url()}>
          <Button type="primary">/form</Button>
        </Link>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;
