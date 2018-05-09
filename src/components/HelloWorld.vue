<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <li class="li-1">测试</li>
            <li class="li-2">测试</li>
            <li class="li-3">测试</li>
        </ul>
        <div class="box"></div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    // 基本用法之变量
    $color: #e4393c;
    // 如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。
    $side : top-left;
    // 基本用法之计算功能
    // 基本用法之嵌套 --- 属性也可以嵌套
    // 可以使用&引用父元素。比如a:hover伪类，可以写成：

    // 标准的CSS注释 /* comment */ ，会保留到编译后的文件。
    // 单行注释 // comment，只保留在SASS源文件中，编译后被省略。
    // 在/*后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。

    // 代码的重用之继承
    // SASS允许一个选择器，继承另一个选择器。比如，现有class1：
    // h1要继承class1，就要使用@extend命令：
    // 代码的重用之Mixin
    // Mixin有点像C语言的宏（macro），是可以重用的代码块。
    // 使用@mixin命令，定义一个代码块。
    // 使用@include命令，调用这个mixin。
    // mixin的强大之处，在于可以指定参数和缺省值。
    // 使用的时候，根据需要加入参数：
    // 代码的重用之颜色函数
    // SASS提供了一些内置的颜色函数，以便生成系列颜色。
    // sass自定义函数 lighten(#cc3, 10%) darken(#cc3, 10%) grayscale(#cc3) complement(#cc3)
    // 代码的重用之插入文件

    // 高级用法之条件语句 配套的还有@else命令：
    // 高级用法之循环语句 SASS支持for循环： 也支持while循环： each命令，作用与for类似：
    //  @each $member in a, b, c, d {
    //      .#{$member} {
    //          background-image: url("/image/#{$member}.jpg");
    //      }
    //  }

    // 高级用法之自定义函数
    @function imgUrl($n) {
        @return '../assets/img/'+$n;
    };
    .class1 {
        height: 60px;
        line-height: 60px;
    }
    @mixin left($value: #bbb) {
        background-color: $value;
    }
    .hello{
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            @for $i from 1 to 4 {
                .li-#{$i} {
                    height: 40px;
                    line-height: 40px;
                    margin-bottom: 4px;
                    border: #{$i}px solid blue;
                }
            }
        }
        h1{
            @if (1 + 1 != 2) {
                color: $color
            }@else{
                color: yellow;
            };
            @extend .class1;
            @include left(aqua);
        }
        .box{
            width: (400px/2);
            height: 200px;
            margin: auto;
            border: {
                color: #e4393c;
            }
            border-#{$side}-radius: 10px;
            background:aqua url(imgUrl('logo.png')) no-repeat center;
            &:hover{
                background-color: #e4393c;
            }
        }
    }
</style>
