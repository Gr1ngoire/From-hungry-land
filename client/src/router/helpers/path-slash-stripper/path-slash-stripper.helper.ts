const pathSlashStripper = (toStrip: string): string => {
  return toStrip.replace("/", "");
};

export { pathSlashStripper };
