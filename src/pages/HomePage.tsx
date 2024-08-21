import landingImage from "../assets/landingImage.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-orange-600">
          Hãy mua đồ mang về ngay hôm nay
        </h1>
        <span className="text-xl">
          Chỉ cần một cú nhấp chuột, món ăn ngon đã sẵn sàng phục vụ bạn!
        </span>
        <SearchBar
          placeHolder="Tìm kiếm theo Thành phố hoặc Thị trấn"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img
          className="h-auto max-w-2xl rounded-lg shadow-lg"
          src={landingImage}
          alt="Landing"
        />
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster
          </span>
          <span>
            Download the LEOSHOP APP for faster ordering and personalized
            recommendations.
          </span>
          <img src={appDownloadImage} alt="App Download" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
