const ProfileLoading = () => {
    return (
        <div className="container max-w-2xl py-8">
            <div className="space-y-6">
                <div className="space-y-2">
                    <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
                    <div className="w-64 h-4 bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="space-y-6">
                    {/* Personal Information Card */}
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="w-48 h-6 mb-6 bg-gray-200 rounded animate-pulse" />
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                                    <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="w-48 h-6 mb-6 bg-gray-200 rounded animate-pulse" />
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="space-y-2">
                                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                                    <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLoading; 