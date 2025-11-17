
const themeColor={
    main_Red:'#E53935',
    assist_golden:'#FFD700',
    assist_darkRed:'#B71C1C',
    neutral_white:'#fff',
    neutral_darkGray:'#333',
}



// 导出一个函数，用于获取主题样式
export function getThemeCSS(){
    // 返回一个对象，包含各种主题样式
    return {
        // 背景颜色
        background:'#daa520',
        // 辅助颜色1
        background2:themeColor.assist_darkRed,
        // 文字颜色1
        textColor:themeColor.assist_golden,
        // 文字颜色2
        textColor2:themeColor.assist_golden,
        // 主颜色
        primaryColor:themeColor.assist_golden,
        // 导航栏背景颜色
        navBarBackground:themeColor.main_Red,
        // 导航栏标题文字颜色
        navBarTitleTextColor:themeColor.neutral_white,
        // 导航栏图标颜色
        navBarIconColor:themeColor.neutral_white,
        // 导航栏文字颜色
        navBarTextColor:themeColor.neutral_white,
        // 输入框文字颜色
        fieldInputTextColor:themeColor.assist_golden,
        // 单元格组标题颜色
        cellGroupTitleColor:themeColor.assist_darkRed,
        // 单元格标签颜色
        cellLabelColor:themeColor.neutral_darkGray,
        // 搜索背景颜色
        searchBackground:themeColor.main_Red,
        // 搜索内容背景颜色
        searchContentBackground:themeColor.assist_darkRed,
        // 标签文字颜色
        tagTextColor:themeColor.neutral_darkGray,
        // 网格项内容激活颜色
        gridItemContentActiveColor:themeColor.main_Red,
        // 单元格激活颜色
        cellActiveColor:themeColor.main_Red,
        
    }
}
