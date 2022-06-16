import React from "react";
import { Wrapper } from "./Toolbar.styles";
import { Button } from "react-bootstrap";
import { HookGetNewsOfType } from "../../../hook/NewsHook";
const Toolbar = () => {
  const handleClick = (event) => {};
  const { news: nhatro, check } = HookGetNewsOfType(1);
  const { news: ktx, checktx } = HookGetNewsOfType(2);
  const { news: chungcu, checkchungcu } = HookGetNewsOfType(3);
  const { news: oghep, checkoghep } = HookGetNewsOfType(4);
  const { news: canho, checkcanho } = HookGetNewsOfType(5);

  return (
    <Wrapper>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        href={`http://localhost:3000/category?danhmuc=1`}
        target={"_blank"}
        className="button"
      >
        Nhà trọ
      </Button>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        href="http://localhost:3000/category?danhmuc=2"
        target={"_blank"}
        className="button"
      >
        Kí túc xá
      </Button>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        href="http://localhost:3000/category?danhmuc=3"
        target={"_blank"}
        className="button"
      >
        Chung cư
      </Button>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        href="http://localhost:3000/category?danhmuc=4"
        target={"_blank"}
        className="button"
      >
        Ở ghép
      </Button>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        href="http://localhost:3000/category?danhmuc=5"
        target={"_blank"}
        className="button"
      >
        Căn hộ
      </Button>
    </Wrapper>
  );
};
export default Toolbar;
