import { TemplateProps } from "../../../utils/types";

export const StoryTemplate = ({ children }: TemplateProps) => {
  return (
    <section>
      <h2>История обращений</h2>
      {children}
    </section>
  );
};
