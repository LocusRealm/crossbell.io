import Link from "next/link";
import Logo from "@/components/common/Logo";
import { Menu, Button, Title, Text } from "@mantine/core";
import ConnectButton from "@/components/common/ConnectButton";
import { useCurrentCharacter } from "@/utils/apis/indexer";
import SearchInput from "@/components/common/Input/SearchInput";

const NavLinks = () => {
	const { data: character } = useCurrentCharacter();

	const navLinks = [
		{ href: "/feed", title: "Feed" },
		// { href: "/shop", title: "Shop" },
		{ href: "/sync", title: "xSync" },
		{
			href: character ? `/@${character.handle}` : "/character",
			title: "Character",
		},
	];

	return (
		<>
			{navLinks.map((link) => (
				<Link key={link.title} href={link.href}>
					<span className="font-semibold text-lg cursor-pointer">
						{link.title}
					</span>
				</Link>
			))}
		</>
	);
};

const MobileMenu = () => (
	<Menu shadow="md">
		<Menu.Target>
			<Button size="xs">
				<Text className="i-csb:more" />
			</Button>
		</Menu.Target>
		<Menu.Dropdown>
			<Menu.Item
				icon={<Text className="i-csb:feed" />}
				component={Link}
				href="/feed"
			>
				Feed
			</Menu.Item>
			<Menu.Item
				icon={<Text className="i-csb:shop" />}
				component={Link}
				href="/shop"
			>
				Shop
			</Menu.Item>
			<Menu.Item
				icon={<Text className="i-csb:sync" />}
				component={Link}
				href="/sync"
			>
				xSync
			</Menu.Item>
			<Menu.Item
				icon={<Text className="i-csb:character" />}
				component={Link}
				href="/character"
			>
				Character
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item>
				<SearchInput />
			</Menu.Item>
			<Menu.Item>
				{/* FIXME: button cannot be inside another button */}
				<div className="flex relative">{/* <ConnectButton /> */}</div>
			</Menu.Item>
		</Menu.Dropdown>
	</Menu>
);

const IndexNav = () => (
	<div className="flex fixed top-0 bg-white w-full px-8 z-36 py-3">
		<div className="flex flex-row justify-between items-center w-full max-w-1440px m-auto px-24px">
			<div className="flex flex-row items-center gap-6">
				<div>
					<Link href="/" className="flex justify-center items-center">
						<Logo size={24} />
						<Title className="ml-4px text-20px leading-28px font-600">
							Crossbell
						</Title>
					</Link>
				</div>
				<div className="flex-row items-center gap-4 hidden md:flex">
					<NavLinks />
				</div>
			</div>
			<div className="flex-row items-center gap-6 hidden md:flex">
				<div>
					<SearchInput />
				</div>
				<div className="flex relative">
					<ConnectButton mode="minimal" />
				</div>
			</div>
			<div className="flex md:hidden">
				{/*Mobile Menu*/}
				<MobileMenu />
			</div>
		</div>
	</div>
);

export default IndexNav;
