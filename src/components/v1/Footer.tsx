export default function Footer() {
    return (
        <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Designed & developed by{' '}
                        <span className="font-medium text-gray-900 dark:text-white">Andrew Ugwuanyi</span>
                    </p>

                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
