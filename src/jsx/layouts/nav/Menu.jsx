import { SVGICON } from "../../constant/Theme";

export const MenuList = [
    {
        title: 'Dashboard', classsChange: 'mm-collapse', iconStyle: SVGICON.Dashboard,
        content: [
            { title: 'Crypto', to: 'dashboard' },
            { title: 'CRM', to: 'crm' },
            { title: 'Finance', to: 'finance' },
            { title: 'Analytics', to: 'analytics' },
            { title: 'Sales', to: 'index-3' },
            { title: 'E-commerce', to: 'ecommerce' },
            { title: 'Course', to: 'course' },
            { title: 'Medical', to: 'medical' },
        ],
    },
    {
        title: 'Profile', classsChange: 'mm-collapse', iconStyle: SVGICON.Profile,
        content: [
            { title: 'Overview', to: 'profile-overview' },
            { title: 'Projects', to: 'profile-projects' },
            { title: 'Projects Details', to: 'profile-projects-details' },
            { title: 'Campaigns', to: 'profile-campaigns' },
            { title: 'Documents', to: 'profile-documents' },
            { title: 'Followers', to: 'profile-followers' },
            { title: 'Activity', to: 'profile-activity' },
        ],
    },
    {
        title: 'Account', classsChange: 'mm-collapse', iconStyle:  SVGICON.Account,
        content: [
            { title: 'Overview', to: 'account-overview' },
            { title: 'Settings', to: 'account-settings' },
            { title: 'Security', to: 'account-security' },
            { title: 'Activity', to: 'account-activity' },
            { title: 'Billing', to: 'account-billing' },
            { title: 'Statements', to: 'account-statements' },
            { title: 'Referrals', to: 'account-referrals' },
            { title: 'Api keys', to: 'account-apikeys' },
            { title: 'Logs', to: 'account-logs' },
        ],
    },
    {
        title: 'CMS', classsChange: 'mm-collapse', iconStyle:  SVGICON.Cms,
        content: [
            { title: 'Content', to: 'content' },
            { title: 'Add Content', to: 'content-add' },
            { title: 'Menus', to: 'menu' },
            { title: 'Email Template', to: 'email-template' },
            { title: 'Add Email', to: 'add-email' },
            { title: 'Blog', to: 'blog' },
            { title: 'Add Blog', to: 'add-blog' },
            { title: 'Blog Category', to: 'blog-category' },
        ],
    },
    {
        title: 'AIKit', classsChange: 'mm-collapse', iconStyle: SVGICON.Aikit, 
        content: [
            { title: 'Auto Write', to: 'auto-write' },
            { title: 'Scheduled', to: 'scheduled' },
            { title: 'Repurpose', to: 'repurpose' },
            { title: 'RSS', to: 'rss' },
            { title: 'Chatbot', to: 'chatbot' },
            { title: 'Fine Tune Models', to: 'fine-tune-models' },
            { title: 'Prompt', to: 'prompt' },
            { title: 'Setting', to: 'setting' },
            { title: 'Import', to: 'import' },
        ]
    },
    {
        title: 'Apps', classsChange: 'mm-collapse', iconStyle:  SVGICON.Apps,
        content: [
            { title: 'chat', to: 'chat', },
            {
                title: 'Users Manager', hasMenu: true,
                content: [
                    { title: 'Profile 1', to: 'app-profile-1', },
                    { title: 'Profile 2', to: 'app-profile-2', },
                    { title: 'Edit Profile', to: 'edit-profile', },
                    { title: 'Post Details', to: 'post-details', },
                ]
            },
            {
                title: 'Email', hasMenu: true,
                content: [
                    { title: 'Compose', to: 'email-compose' },
                    { title: 'Inbox', to: 'email-inbox' },
                    { title: 'Read', to: 'email-read' },
                ]
            },
            { title: 'Calender', to: 'app-calendar' },
        ]
    },
    {
        title: 'Ecommerce', hasMenu: true, iconStyle:SVGICON.Apps,
        content: [
            {
                title: 'Categories', hasMenu: true,
                content: [
                    { title: 'Category Table', to: 'category-table', },
                    { title: 'Add Category', to: 'add-categary', },
                    { title: 'Edit Category', to: 'edit-categary', },
                ]
            },
            {
                title: 'Products', hasMenu: true,
                content: [
                    { title: 'Product Table', to: 'product-table', },
                    { title: 'Add Product', to: 'add-product', },
                    { title: 'Edit Product', to: 'edit-product', },
                ]
            },
            {
                title: 'Shop', hasMenu: true,
                content: [
                    { title: 'Product Grid', to: 'ecom-product-grid', },
                    { title: 'Product List', to: 'ecom-product-list', },
                    { title: 'Product Details', to: 'ecom-product-detail', },
                    { title: 'Order', to: 'ecom-product-order', },
                    { title: 'Checkout', to: 'ecom-checkout', },
                    { title: 'Invoice', to: 'ecom-invoice', },
                    { title: 'Customers', to: 'ecom-customers', },
                ]
            },
        ]
    },
    {
        title: 'Bootstrap', iconStyle:  SVGICON.Bootsrtap, classsChange: 'mm-collapse',
        content: [
            { title: 'Accordion', to: 'ui-accordion', },
            { title: 'Alert', to: 'ui-alert', },
            { title: 'Badge', to: 'ui-badge', },
            { title: 'Button', to: 'ui-button', },
            { title: 'Modal', to: 'ui-modal', },
            { title: 'Button Group', to: 'ui-button-group', },
            { title: 'List Group', to: 'ui-list-group', },
            { title: 'Cards', to: 'ui-card', },
            { title: 'Carousel', to: 'ui-carousel', },
            { title: 'Dropdown', to: 'ui-dropdown', },
            { title: 'Popover', to: 'ui-popover', },
            { title: 'Progressbar', to: 'ui-progressbar', },
            { title: 'Tab', to: 'ui-tab', },
            { title: 'Typography', to: 'ui-typography', },
            { title: 'Pagination', to: 'ui-pagination', },
            { title: 'Grid', to: 'ui-grid', },
            { title: 'Media Object', to: 'ui-media-object', },
            { title: 'Breadcrumb', to: 'ui-breadcrumb', },
            { title: 'Placeholder', to: 'ui-placeholder', },
            { title: 'Spinners', to: 'ui-spinners', },
            { title: 'Range Slider', to: 'ui-range-slider', },
        ]
    },
    {
        title: 'Plugins', iconStyle:  SVGICON.Plugins, classsChange: 'mm-collapse',
        content: [
            { title: 'Select 2', to: 'uc-select2' },
            { title: 'Sweet Alert', to: 'uc-sweetalert' },
            { title: 'Toastr', to: 'uc-toastr' },
            { title: 'Noui Slider', to: 'uc-noui-slider' },
            { title: 'Light Gallery', to: 'uc-lightgallery' }, 
        ]
    },
    {
        title: 'Charts', iconStyle:  SVGICON.Charts, classsChange: 'mm-collapse',
        content: [
            { title: 'Rechart', to: 'chart-rechart' },
            { title: 'Chartjs', to: 'chart-chartjs' },
            { title: 'Sparkline', to: 'chart-sparkline' },
            { title: 'Apex Chart', to: 'chart-apexchart' }, 
        ]
    },
    { title: 'Widget', iconStyle:  SVGICON.Widget, to: 'widget-basic', },
    {
        title: 'Forms', iconStyle:  SVGICON.Forms, classsChange: 'mm-collapse',
        content: [
            { title: 'Form Elements', to: 'form-element' },
            { title: 'Wizard', to: 'form-wizard' },
            { title: 'CkEditor', to: 'form-ckeditor' },
            { title: 'Pickers', to: 'form-pickers' },
            { title: 'Form Validate', to: 'form-validation' },
        ]
    },
    {
        title: 'Table', iconStyle:  SVGICON.Table, classsChange: 'mm-collapse',
        content: [
            { title: 'Bootstrap', to: 'table-bootstrap-basic', },
            { title: 'Datatable', to: 'table-datatable-basic', },
        ]
    },
    {
        title: 'Pages', iconStyle:  SVGICON.Pages, classsChange: 'mm-collapse',
        content: [
            { title: 'Login', to: 'page-login' },
            { title: 'Register', to: 'page-register' },
            {
                title: 'Error', hasMenu: true,
                content: [
                    { title: 'Error 400', to: 'page-error-400' },
                    { title: 'Error 403', to: 'page-error-403' },
                    { title: 'Error 404', to: 'page-error-404' },
                    { title: 'Error 500', to: 'page-error-500' },
                    { title: 'Error 503', to: 'page-error-503' },
                ]
            },
            { title: 'Lock Screen', to: 'page-lock-screen', },
            { title: 'Empty Page', to: 'empty-page', }
        ]
    },
]