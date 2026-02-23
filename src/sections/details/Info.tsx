import type { InfoPropType } from '@utils/types';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { FiLink } from 'react-icons/fi';
import Languages from '@constants/languages.json';
import Keywords from './Keywords';
import DummyContentScore from './DummyContentScore';

/**
 * displays the information about the single movie like status network, language, budget, etc...
 *
 * @param {object} data - information about the movie to display
 * @param {string} idEndpoint - link for fetch more data related to the movie
 * @returns - jsx for the info component
 */
const Info = ({ data, idEndpoint }: InfoPropType) => {
  const networkImgUrl = data.network
    ? `${import.meta.env.VITE_IMAGE_BASE_URL}h60${data.network.logo_path}`
    : '';

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2.5 items-center">
        <FaFacebook className="text-2xl" />
        <FaTwitter className="text-2xl" />
        <FaInstagram className="text-2xl" />
        <div className="min-h-6 h-full border-r border-search-border"></div>
        <FiLink className="text-2xl" />
      </div>
      <div>
        <p className="font-semibold mb-2.5 text-lg">Facts</p>
        <p className="font-semibold">Status</p>
        <p>{data.status}</p>
      </div>
      {data.network ? (
        <div>
          <p className="font-semibold">Network</p>
          <img className="max-h-7.5" src={networkImgUrl} alt={data.network.name} />
        </div>
      ) : (
        ''
      )}
      <div>
        <p className="font-semibold">Original Language</p>
        <p>{Languages.find((item) => item.value === data.language)?.option}</p>
      </div>
      {data.type ? (
        <div>
          <p className="font-semibold">Type</p>
          <p>{data.type}</p>
        </div>
      ) : (
        ''
      )}
      {data.budget ? (
        <div>
          <p className="font-semibold">Budget</p>
          <p>${data.budget}</p>
        </div>
      ) : (
        ''
      )}
      {data.revenue ? (
        <div>
          <p className="font-semibold">Revenue</p>
          <p>{data.revenue}</p>
        </div>
      ) : (
        ''
      )}
      <Keywords idEndpoint={idEndpoint} />
      <DummyContentScore />
    </div>
  );
};

export default Info;
