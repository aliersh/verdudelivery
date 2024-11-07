const ProductosLoading = () => {
    const categories = ["verduras", "frutas", "legumbres", "otros"];

    return (
        <div className="max-w-4xl px-4 mx-auto">
            {categories.map((category) => (
                <div key={category} className="mt-4 mb-8 animate-pulse">
                    <div className="w-48 h-8 mb-4 bg-gray-200 rounded" />
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="flex items-center space-x-4"
                            >
                                <div className="w-20 h-20 bg-gray-200 rounded-md" />
                                <div className="flex-1">
                                    <div className="w-3/4 h-6 bg-gray-200 rounded" />
                                    <div className="flex items-center mt-2 space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded" />
                                        <div className="w-16 h-8 bg-gray-200 rounded" />
                                        <div className="w-8 h-8 bg-gray-200 rounded" />
                                    </div>
                                </div>
                                <div className="w-24">
                                    <div className="w-full h-5 mb-2 bg-gray-200 rounded" />
                                    <div className="w-full h-6 bg-gray-200 rounded" />
                                </div>
                                <div className="w-24">
                                    <div className="w-full h-10 bg-gray-200 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductosLoading;
