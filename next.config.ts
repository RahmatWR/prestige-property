import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	/* config options here */
};

const withNectIntl = createNextIntlPlugin();

export default withNectIntl(nextConfig);
