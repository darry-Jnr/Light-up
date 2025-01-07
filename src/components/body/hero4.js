import React from "react";

export default function Hero4() {
    const remark = [
        {
            id: 1,
            title: "10 Tips to be a better gamer",
            imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/6.jpg",
            year: "July 12, 2018",
            comments: "Sed efficitur diam  ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam.."
        },
        {
            id: 2,
            title: "Microsoft has some new tips",
            imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/7.jpg",
            year: "August 10, 2006",
            comments: "Sed efficitur diam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam.."
        },
        {
            id: 3,
            title: "Sony releases for 2020",
            imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/8.jpg",
            year: "June 2, 2020",
            comments: "Sed efficitur diam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat volutpat. Sed efficitur diam."
        }
    ];

    return (
        <div className="flex gap-9   bg-black  px-[100px] py-10 ">
            <div className="flex flex-col">
                <h1 className="text-3xl text-white">Latest Articles</h1>
                {remark.map((item) => (
                    <div key={item.id} className="flex gap-4 mb-4">
                        <div>
                            <img src={item.imageurl} alt={item.title} className="w-64 h-48 object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="text-logincolor">{item.year}</p>
                            <p className="text-gray-400 break-words max-w-lg">{item.comments}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h1 className="text-3xl text-white">This week’s deal</h1>
                <img src="https://preview.colorlib.com/theme/egames/img/bg-img/add.png" alt="img"/>
                <img src="https://preview.colorlib.com/theme/egames/img/bg-img/side-img.png"  className="transform -translate-y-[230px] translate-x-[70px]" alt="pes" />
            </div>
         


        </div>
    );
}
