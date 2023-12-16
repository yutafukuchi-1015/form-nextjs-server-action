import { pagesPath } from "@/lib/$path";
import { Button, ConfigProvider, Input } from "antd";
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
          <Input name="name" />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
        <Link href={pagesPath.$url()}>
          <Button type="primary">/home</Button>
        </Link>
      </div>
    </ConfigProvider>
  );
}
