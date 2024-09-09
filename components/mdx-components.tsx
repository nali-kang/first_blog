import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { Callout } from "./callout";
import { cn } from "@/lib/utils";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

interface Mdxprops {
  code: string;
}

export function MDXContent({ code }: Mdxprops) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
