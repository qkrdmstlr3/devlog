type ObjType = {
  [key: string]: any;
};

export const flatObj = <T>(obj: ObjType): T =>
  Object.entries(obj).reduce(
    (a, [k, v]) => ({ ...a, ...(typeof v === 'object' ? flatObj(v) : { [k]: v }) }),
    {}
  ) as unknown as T;
