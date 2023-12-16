import { pagesPath } from "@/lib/$path";
import { Button, ConfigProvider, Input, InputNumber, Typography } from "antd";
import Link from "next/link";
import theme from "@/theme/themeConfig";
import { redirect } from "next/navigation";

async function create(formData: FormData) {
  "use server";
  await fetch("http://localhost:3000/user", {
    method: "POST",
    body: formData,
  });
  redirect(pagesPath.$url().path);
}

export default function Form() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <form action={create}>
          <div className="flex justify-between">
            <p>name</p>
            <Input name="name" />
          </div>
          <div className="flex justify-between">
            <p>age</p>
            <InputNumber name="age" />
          </div>
          <div className="flex justify-between">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link href={pagesPath.$url()}>
              <Button type="primary">home</Button>
            </Link>
          </div>
        </form>
      </div>
    </ConfigProvider>
  );
}
