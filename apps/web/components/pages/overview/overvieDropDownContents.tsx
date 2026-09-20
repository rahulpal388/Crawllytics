import { DropDown } from "@repo/ui/components/dropdown/dropDown";

type DropDownProps<T> = {
  title: string;
  sideText: string | null;
  data: T;
  fields: Record<keyof T, string>;
};
export function OverviewDropDownContents<
  T extends Record<string, string | number | boolean>,
>({ title, sideText, data, fields }: DropDownProps<T>) {
  return (
    <>
      <DropDown title={title} sideText={sideText}>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="grid grid-cols-[260px_1fr] gap-2">
            <p className="body-sm">{fields[key]}</p>
            <p className="caption">{`${value}`}</p>
          </div>
        ))}
      </DropDown>
    </>
  );
}
