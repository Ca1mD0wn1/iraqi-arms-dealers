export default `
            .goods {
                width: 240px;
                height: 444px;
                padding: 12px 9px;
                font: 12px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "\u5b8b\u4f53", sans-serif;
                color: #666;
                position: relative;
                float: left;
            }

            

            .goods:hover {
                box-shadow: 0px 0px 4px #CCC;
            }

            .goods>.iconImg {
                text-decoration: none;
                width: 100%;
                height: 220px;
                text-align: center;
                display: block;
                position: relative;
            }

            .goods>.iconImg>img {
                width: 220px;
                height: 220px;
            }

            .goods>.iconImg>.iconPromote {
                width: 220px;
                height: 25px;
                text-align: left;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.6);
            }

            .goods>.iconImg>.iconPromote>img {
                margin-left: 10px;
                vertical-align: middle;
            }

            .goods>.iconImg .iconPromoteTxt {
                line-height: 25px;
                color: white;
                margin-left: 10px;
            }

            .goods>.iconList {
                margin-left: 2px;
            }

            .goods>.iconList>img {
                float: left;
                /* #e4393c */
                border: 1px solid #ddd;
                padding: 1px;
                width: 25px;
                height: 25px;
                margin: 2px;
            }

            .clear::after {
                content: "";
                display: block;
                height: 0;
                overflow: hidden;
                clear: both;
                visibility: hidden;
            }

            .goods>.priceCon {
                font-size: 16px;
                color: #e4393c;
                margin: 0;
                margin-top: 8px;
            }

            .goods>.priceCon>i {
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                font-family: Verdana;
            }

            .goods>.titleCon {
                width: 220px;
                overflow: hidden;
                white-space: nowrap;
                margin: 0;
                margin-top: 8px;
                padding: 0;
            }

            .goods>.titleCon>.titleIcon {
                float: left;
                height: 16px;
                padding: 0 3px;
                margin-top: 2px;
                margin-right: 3px;
                overflow: hidden;
                color: #fff;
                font: 12px/16px "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
                background: #c81623;
                border-radius: 2px;

            }

            .goods>.titleCon>a {
                text-decoration: none;
                color: #666;
            }

            .goods>.titleCon>a:hover {
                color: #c81623;
            }

            .goods>.info {
                margin: 0;
                margin-top: 8px;
            }

            .goods>.info>.infoitem {
                float: left;
                height: 19px;
                line-height: 19px;
                padding: 0 6px;
                margin-right: 7px;
                color: #999;
                background: #f4f4f4;
                text-decoration: none;
            }

            .goods>.info>.infoitem:hover {
                color: #c81623;
            }

            .goods>.judgeCon {
                margin-top: 8px;
            }

            .goods>.judgeCon>.judge {
                color: #646fb0;
                font-family: verdana;
                font-weight: 700;
            }

            .goods>.shoppingCon {
                margin-top: 8px;
                margin-bottom: 10px;
            }

            .goods>.shoppingCon>.shopping {
                color: #999;
                text-decoration: none;
                display: inline-block;
                max-width: 122px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: 10px;
            }

            .goods>.shoppingCon>.shopping:hover {
                color: #c81623;
            }

            .icon1,
            .icon3,
            .icon2 {
                float: left;
                height: 16px;
                line-height: 16px;
                padding: 0 3px;
                margin-right: 3px;
                overflow: hidden;
                text-align: center;
                font-style: normal;
                font-size: 12px;
                font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
                background: #e23a3a;
                color: #FFF;
                cursor: default;
                border-radius: 2px;
            }

            .icon4 {
                float: left;
                height: 14px;
                line-height: 14px;
                padding: 0 3px;
                border: 1px solid #e23a3a;
                margin-right: 3px;
                overflow: hidden;
                text-align: center;
                font-style: normal;
                font-size: 12px;
                font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
                border-radius: 2px;
                color: #e23a3a;
            }

            .icon3 {
                background: #31c19e;
            }

            .icon2 {
                float: left;
                height: 14px;
                line-height: 14px;
                line-height: 16px\0;
                padding: 0 3px;
                margin-right: 3px;
                overflow: hidden;
                text-align: center;
                font-style: normal;
                font-size: 12px;
                font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
                border-radius: 2px;
                border: 1px solid #4d88ff;
                color: #4d88ff;
                background-color: white;
            }

            .double11 {
                position: absolute;
                right: 10px;
                top: 20px;
            }

`