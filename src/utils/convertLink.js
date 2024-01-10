module.exports = (url) => {
  if (!url) return console.error("Please enter the avalabel link !!");
  return {
    yandex: `https://yandex.com/images/search?source=collections&url=${url}&rpt=imageview`,
    google: `https://lens.google.com/uploadbyurl?url=${url}`,
    bing: `https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIVSP&sbisrc=UrlPaste&q=imgurl:${url}`,
    tineye: `https://www.tineye.com/search/?&url=${url}`,
  };
};
