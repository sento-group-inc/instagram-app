// Web Vitals の測定とレポートを管理するモジュール
// CLS (Cumulative Layout Shift)
// FID (First Input Delay)
// LCP (Largest Contentful Paint)

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      try {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      } catch (error) {
        console.error('Error reporting web vitals:', error);
      }
    }).catch((error) => {
      console.error('Failed to load web-vitals:', error);
    });
  }
};

export default reportWebVitals;