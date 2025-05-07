import React from "react";
import { getMDXComponent } from "mdx-bundler/client";

type Props = {
  code: string;
  frontmatter?: {
    [key: string]: any;
  };
};

const Mdx = ({ code, frontmatter }: Props) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <article className="w-full prose lg:prose-xl">
      <Component />
    </article>
  );
};

export default Mdx;
