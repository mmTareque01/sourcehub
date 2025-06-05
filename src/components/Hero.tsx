import React from 'react'
import Search from './Search'

export default function Hero() {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDk3Bm1y6zwwZMjRqBCh-q9HZGagJSeLyTskomXl_z2YxU4YusYC70L0WAsoJd0dAFxmMBAzipkojdcGyTfhlrb3NsYMyXuZFR20THtZGH5uiEQVQ8oqE3D7h2g44_wy_WVNslYe1lxbsqcQw_nOaTru1iYxra12DHJ5WaAd7xc-nRM9EHPB-nH_1WXRM9W6DKS2QSbmyaSyIwXhTpaGKYFGwBKay2X1peU1BDZAjtHgCcHsd3pKIOy7-8nd7kJ0CyR7dP0Ixg8Xe4R")`
                    }}

                >
                    <div className="flex flex-col gap-2 text-center">
                        <h1
                            className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                        >
                            Discover Open Source SaaS Projects
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            Explore a curated list of publicly available SaaS projects with source code, tutorials, and resources to help you learn and build.
                        </h2>
                    </div>
                    <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                        <Search />
                    </label>
                </div>
            </div>
        </div>
    )
}
