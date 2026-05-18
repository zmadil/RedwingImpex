const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (src: string) => `${base}${src}`;
