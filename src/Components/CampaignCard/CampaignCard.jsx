import PropTypes from "prop-types";
import {  FaRegCalendarCheck } from "react-icons/fa";

const CampaignCard = ({ campaign }) => {
      const { title, thumbnail, campaignType, deadline } = campaign
      return (
            <div className=" w-full h-full shadow-md shadow-gray-300 dark:shadow-gray-700 text-black dark:text-white rounded-xl overflow-hidden">
                  <div>
                        <img className=" h-64 w-full object-cover " src={thumbnail} alt={title} />
                  </div>
                  <div className=" mt-4 space-y-2 p-6">
                        <h1 className=" text-lg font-bold">{title}</h1>
                        <div className=" flex justify-between ">
                              <p className=" badge border-info"> {campaignType}</p>
                              <p className=" flex items-center gap-1"> <FaRegCalendarCheck className="text-info" /> {deadline} </p>

                        </div>
                        <button className=" btn btn-sm dark:text-white">See more</button>
                  </div>
            </div>
      );
};

CampaignCard.propTypes = {
      campaign: PropTypes.object.isRequired
}
export default CampaignCard;