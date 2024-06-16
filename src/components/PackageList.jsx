import React, { useEffect, useState } from 'react';
import giftImage from '../assets/packageIcons/gift.png';
import electronicsImage from '../assets/packageIcons/electronics.png';
import flameableImage from '../assets/packageIcons/flameable.png';
import medicineImage from '../assets/packageIcons/medicine.png';
import toyImage from '../assets/packageIcons/toys.png';
import defaultImg from '../assets/packageIcons/defaultImg.png';
import clotheImg from '../assets/packageIcons/clothes.png';
import documentsImg from '../assets/packageIcons/documents.png';
import liquidImg from '../assets/packageIcons/liquid.png';

function PackageList({latitude, longitude}) {
  const [packageList, setPackageList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchPackageList = async () => {
      const dummyData = [
        { "id": "PK8592", "name": "Smartphone", "toAddress": "123 Park Street, Kolkata, West Bengal 700016", "fromAddress": "456 Elgin Road, Kolkata, West Bengal 700020", "description": "Description for Package 1", "pkgType": "electronics", "isFragile": true },
        { "id": "PK2387", "name": "Winter Clothes", "toAddress": "789 Ballygunge Place, Kolkata, West Bengal 700019", "fromAddress": "101 Shakespeare Sarani, Kolkata, West Bengal 700017", "description": "Description for Package 2", "pkgType": "clothes", "isFragile": false },
        { "id": "PK4739", "name": "Contract Papers", "toAddress": "202 AJC Bose Road, Kolkata, West Bengal 700017", "fromAddress": "303 Camac Street, Kolkata, West Bengal 700016", "description": "Description for Package 3", "pkgType": "documents", "isFragile": false },
        { "id": "PK9531", "name": "Perfume Bottle", "toAddress": "404 Esplanade, Kolkata, West Bengal 700069", "fromAddress": "505 Howrah Bridge, Kolkata, West Bengal 711101", "description": "Description for Package 4", "pkgType": "liquid", "isFragile": true },
        { "id": "PK1746", "name": "Toy Car", "toAddress": "606 Salt Lake City, Kolkata, West Bengal 700091", "fromAddress": "707 New Town, Kolkata, West Bengal 700156", "description": "Description for Package 5", "pkgType": "toy", "isFragile": false },
        { "id": "PK6823", "name": "Vitamins", "toAddress": "808 Dum Dum, Kolkata, West Bengal 700028", "fromAddress": "909 Rajarhat, Kolkata, West Bengal 700135", "description": "Description for Package 6", "pkgType": "medicine", "isFragile": true },
        { "id": "PK7291", "name": "Gas Cylinder", "toAddress": "1010 Barabazar, Kolkata, West Bengal 700007", "fromAddress": "1111 Burrabazar, Kolkata, West Bengal 700007", "description": "Description for Package 7", "pkgType": "flameable", "isFragile": true },
        { "id": "PK3498", "name": "Laptops", "toAddress": "1212 Sealdah, Kolkata, West Bengal 700014", "fromAddress": "1313 Park Circus, Kolkata, West Bengal 700017", "description": "Description for Package 8", "pkgType": "electronics", "isFragile": true },
        { "id": "PK5693", "name": "Glassware", "toAddress": "1414 Tollygunge, Kolkata, West Bengal 700033", "fromAddress": "1515 Kalighat, Kolkata, West Bengal 700026", "description": "Description for Package 9", "pkgType": "liquid", "isFragile": true },
        { "id": "PK8462", "name": "Books", "toAddress": "1616 Gariahat, Kolkata, West Bengal 700029", "fromAddress": "1717 Dhakuria, Kolkata, West Bengal 700031", "description": "Description for Package 10", "pkgType": "documents", "isFragile": false },
        { "id": "PK9347", "name": "Jackets", "toAddress": "1818 Kasba, Kolkata, West Bengal 700042", "fromAddress": "1919 Jadavpur, Kolkata, West Bengal 700032", "description": "Description for Package 11", "pkgType": "clothes", "isFragile": false },
        { "id": "PK6578", "name": "Medicine Box", "toAddress": "2020 Behala, Kolkata, West Bengal 700034", "fromAddress": "2121 Thakurpukur, Kolkata, West Bengal 700063", "description": "Description for Package 12", "pkgType": "medicine", "isFragile": true },
        { "id": "PK4736", "name": "Sports Gear", "toAddress": "2222 Joka, Kolkata, West Bengal 700104", "fromAddress": "2323 Diamond Harbour Road, Kolkata, West Bengal 700063", "description": "Description for Package 13", "pkgType": "clothes", "isFragile": false },
        { "id": "PK2957", "name": "Jewelry", "toAddress": "2424 Alipore, Kolkata, West Bengal 700027", "fromAddress": "2525 Kidderpore, Kolkata, West Bengal 700023", "description": "Description for Package 14", "pkgType": "electronics", "isFragile": true },
        { "id": "PK4862", "name": "Kitchenware", "toAddress": "2626 Hastings, Kolkata, West Bengal 700022", "fromAddress": "2727 Khidderpore, Kolkata, West Bengal 700023", "description": "Description for Package 15", "pkgType": "documents", "isFragile": false },
        { "id": "PK7631", "name": "Camera", "toAddress": "2828 College Street, Kolkata, West Bengal 700073", "fromAddress": "2929 Shyambazar, Kolkata, West Bengal 700004", "description": "Description for Package 16", "pkgType": "electronics", "isFragile": true },
        { "id": "PK1437", "name": "Stethoscope", "toAddress": "3030 Maniktala, Kolkata, West Bengal 700006", "fromAddress": "3131 Ultadanga, Kolkata, West Bengal 700067", "description": "Description for Package 17", "pkgType": "medicine", "isFragile": true },
        { "id": "PK9521", "name": "Office Files", "toAddress": "3232 Kankurgachi, Kolkata, West Bengal 700054", "fromAddress": "3333 Phoolbagan, Kolkata, West Bengal 700054", "description": "Description for Package 18", "pkgType": "documents", "isFragile": false },
        { "id": "PK5384", "name": "Laptop", "toAddress": "3434 Lake Town, Kolkata, West Bengal 700089", "fromAddress": "3535 Bangur Avenue, Kolkata, West Bengal 700055", "description": "Description for Package 19", "pkgType": "electronics", "isFragile": true },
        { "id": "PK6412", "name": "Milk Bottles", "toAddress": "3636 Nagerbazar, Kolkata, West Bengal 700074", "fromAddress": "3737 Baguiati, Kolkata, West Bengal 700059", "description": "Description for Package 20", "pkgType": "liquid", "isFragile": true },
        { "id": "PK7385", "name": "Tablets", "toAddress": "3838 Lake Gardens, Kolkata, West Bengal 700045", "fromAddress": "3939 Prince Anwar Shah Road, Kolkata, West Bengal 700045", "description": "Description for Package 21", "pkgType": "medicine", "isFragile": true },
        { "id": "PK2946", "name": "Gaming Console", "toAddress": "4040 Ruby Park, Kolkata, West Bengal 700078", "fromAddress": "4141 Patuli, Kolkata, West Bengal 700094", "description": "Description for Package 22", "pkgType": "electronics", "isFragile": true },
        { "id": "PK3857", "name": "Baby Clothes", "toAddress": "4242 Garia, Kolkata, West Bengal 700084", "fromAddress": "4343 Narendrapur, Kolkata, West Bengal 700103", "description": "Description for Package 23", "pkgType": "clothes", "isFragile": false },
        { "id": "PK8364", "name": "Fireworks", "toAddress": "4444 Sonarpur, Kolkata, West Bengal 700150", "fromAddress": "4545 Baruipur, Kolkata, West Bengal 700144", "description": "Description for Package 24", "pkgType": "flameable", "isFragile": true },
        { "id": "PK5948", "name": "Document Files", "toAddress": "4646 Kalyani, Kolkata, West Bengal 700149", "fromAddress": "4747 Ballygunge, Kolkata, West Bengal 700019", "description": "Description for Package 25", "pkgType": "documents", "isFragile": false },
      ]
      setPackageList(dummyData);
    };

    fetchPackageList();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const imageMap = {
    toy: toyImage,
    gift: giftImage,
    medicine: medicineImage,
    flameable: flameableImage,
    electronics: electronicsImage,
    defaultImg: defaultImg,
    liquid: liquidImg,
    clothes: clotheImg,
    documents: documentsImg
  };
  const getImgSrc = (pkgType) => {
    if (pkgType && imageMap[pkgType]) {
      return imageMap[pkgType];
    } else {
      return imageMap.defaultImg; // Use defaultImg as fallback
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedPackages = packageList.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(packageList.length / itemsPerPage);

  return (
    <>
      <div className="flex items-center justify-center mb-6">
        <div className="flex justify-center items-center flex-col w-full packagesContainer sm:w-5/6 lg:w-1/2">
          {selectedPackages.length !== 0 ? (
            selectedPackages.map((pkg) => (
              <div className="flex items-center min-w-96 w-full shadow-lg sm:w-11/12 lg:w-3/4 mb-3 border-2 border-gray-300 rounded-xl" key={pkg.id}>
                <div className="type w-1/4 flex flex-col gap-2 items-center justify-center h-[100%]">
                  <p className="text-fontColor font-semibold">{pkg.name}</p>
                  <img src={getImgSrc(pkg.pkgType)} alt={pkg.pkgType} className="w-8/12" />
                </div>
                <div className="details w-3/4 bg-gray-200 pt-2 pl-3 rounded-r-xl pb-2">
                  <div className="flex justify-between pl-3 pr-3">
                    <p className="text-fontColor font-bold bg-gray-300 p-1 rounded-md px-2">{pkg.id}</p>
                    <p className="fragile text-red-400 font-bold">{pkg.isFragile ? 'FRAGILE' : ''}</p>
                  </div>
                  <div className="address flex pl-3 pr-3 space-x-3">
                    <div className="from w-1/2">
                      <p className="text-fontColor text-md font-semibold">Pickup</p>
                      <span className="text-sm font-mono text-fontColor">{pkg.fromAddress}</span>
                    </div>
                    <div className="to w-1/2">
                      <p className="text-fontColor text-md font-semibold">Deliver</p>
                      <span className="text-sm font-mono text-fontColor">{pkg.toAddress}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center pl-4 mr-4">
                    <button className="bg-blue-400 p-1 px-3 rounded-md text-white font-sans">Open in Maps</button>
                    <button className="bg-green-500 p-1 px-5 rounded-md text-white">Deliver</button>
                  </div>
                </div>
              </div>
            ))
          ) : null}
        </div>
      </div>
      <div className="flex justify-center items-center mb-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-300 rounded-full  hover:bg-gray-400 disabled:opacity-50 disabled:hover:bg-transparent"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-400 rounded-full text-white' : 'border border-gray-300 rounded-full hover:bg-gray-300 active:scale-[.98] active:duration-75 transition-all'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50 disabled:hover:bg-transparent"
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default PackageList;
