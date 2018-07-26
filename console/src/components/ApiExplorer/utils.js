const getHeadersAsJSON = headers => {
  const headerJSON = {};
  const nonEmptyHeaders = headers.filter(header => {
    return (header.key || header.value) && header.isActive;
  });
  nonEmptyHeaders.forEach(header => {
    headerJSON[header.key] = encodeURI(header.value);
  });
  return headerJSON;
};

export { getHeadersAsJSON };
