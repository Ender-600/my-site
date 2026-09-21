import s from "@/app/demos/editorial/editorial.module.css";

export function EditorialPageHeading({ label, title, description }: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className={s.pageHeading}>
      <p className={s.eyebrow}>{label}</p>
      <h1>{title}</h1>
      {description && <p className={s.pageDescription}>{description}</p>}
    </header>
  );
}
