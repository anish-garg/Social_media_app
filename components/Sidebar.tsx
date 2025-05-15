import {
    HomeIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    UserIcon,
    EllipsisHorizontalCircleIcon
} from "@heroicons/react/24/outline"
import Image from "next/image"

const Sidebar = () => {
    return (
        <nav className="h-screen hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20">
            <div className="relative h-full">
                <div className="py-3">
                    <Image src={'/assets/Logo.png'} alt="logo" width={55} height={55} />
                </div>
                <ul >
                    <SidebarLink text="Home" Icon={HomeIcon} />
                    <SidebarLink text="Explore" Icon={HashtagIcon} />
                    <SidebarLink text="Notifications" Icon={BellIcon} />
                    <SidebarLink text="Messages" Icon={InboxIcon} />
                    <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                    <SidebarLink text="Profile" Icon={UserIcon} />
                    <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
                    <button className="hidden xl:block bg-black text-white w-[200px] h-[52px] rounded-full font-semibold cursor-pointer shadow-xl mt-2">
                        Connect
                    </button>
                </ul>
                <div className="absolute bottom-0">
                    User log
                </div>
            </div>
        </nav>
    )
}

// Type annotation for props
interface SidebarLinkProps {
    text: String;
    Icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
}

function SidebarLink({ text, Icon }: SidebarLinkProps) {
    return (
        <li className="flex items-center text-xl mb-2 space-x-3 p-2.5" >
            <Icon className="h-7" />
            <span className="hidden xl:block">{text}</span>
        </li>
    )
}

export default Sidebar