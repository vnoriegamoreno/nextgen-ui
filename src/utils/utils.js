export const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatMileage = (mileage) => {
  const mileageString = mileage.toString();
  const mileageSplitted = mileageString.split(".");
  mileageSplitted[0] = mileageSplitted[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return mileageSplitted.join(".");
};
