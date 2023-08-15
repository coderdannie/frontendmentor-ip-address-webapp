const Dashboard = ({ data }) => {
  return (
    <div className="dashboard max-w-[69.4375rem] w-full mx-auto uppercase font-semibold text-center  text-darkGray bg-white rounded-xl grid justify-center gap-4 pt-6 px-6 pb-5 md:grid-cols-4 md:text-left md:rounded-xl md:pt-8 md:pb-6 md:pl-8">
      <div className="md:border-r-2 md:border-l-veryDarkGray">
        <h3 className="text-xs pb-1 md:pb-3">ip address</h3>
        <p className=" text-veryDarkGray ">{data?.ip}</p>
      </div>
      <div className="md:border-r-2 md:border-l-veryDarkGray md:pl-6">
        <h3 className="text-xs pb-1 md:pb-3 ">location</h3>
        <p className=" text-veryDarkGray ">
          {data?.location?.city}, {data?.location?.country}{' '}
          {data?.location?.geonameId}
        </p>
      </div>
      <div className="md:border-r-2 md:border-l-veryDarkGray md:pl-6">
        <h3 className="text-xs pb-1 md:pb-3">Timezone </h3>
        <p className=" text-veryDarkGray ">UTC {data?.location?.timezone}</p>
      </div>
      <div className="md:pl-6">
        <h3 className="text-xs pb-1 md:pb-3">ISP </h3>
        <p className=" text-veryDarkGray capitalize ">{data?.isp}</p>
      </div>
    </div>
  );
};
export default Dashboard;
