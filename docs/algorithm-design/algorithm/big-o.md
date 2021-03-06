---
title: 算法效率 & 大O表示法
---

> 算法效率是指算法执行的时间，算法执行时间需通过依据该算法编制的程序在计算机上运行时所消耗的时间来度量。

### 效率影响因素
影响效率主要有如下4种情况，但是如果只关注`算法自身`，抛开其他因素，一个程序的运行时间依赖与`算法策略`的好坏与问题的`输入规模`，
- 算法策略
- 输入规模
- 代码编译后的质量
- 计算机运算速度

### 评估方案
- 事后统计
    +依据算法设计对应的`测试程序`，记录程序的`运行时间`，从而确定算法效率的高低
- 事前估算
    + 依据`统计方法`对算法进行`估算`

### 评估原则
一般`不会精确`计算指令执行`多少次`，因为这样还要考虑`编译器优化`之后代码的执行问题
<br/>
对于算法里的`变量声明，循环索引递增与终止条件`等操作，随着输入规模的增长它们对效率的影响逐渐微乎其微，所以`忽略不计`
<br/>
事前估算通常会使用`函数`来描述算法的效率，如果输入规模足够大，函数中的`常数`、甚至`次要项`对函数趋势图像的影响可以逐渐`忽略`，所以我们只需`关注`主项的阶数(`最高次项阶数`)即可

---

## 大O阶推导

#### 评估方案
通常我们会采用`事前估算`的方式研究算法，并侧重研究算法随着`输入规模`扩大增长量的一个`抽象`

#### 大O阶公式
- 通常记作 `T(n) = O( f(n) )`，n为问题规模，f(n)为语句关于n执行次数的函数, T(n)称作`渐进时间复杂度`
- 表示随问题规模n的`增大`，算法`执行时间`的增长率与f(n)的`增长率相同`
- 通常，随着n的增长，T(n)增长最慢的算法为`最优算法`

#### 大O阶推导
主要估算随`问题规模`的变化程序的`执行次数`，然后确定执行的`数量级`，时间复杂度其实就是执行次数复杂度

- 用`常数1`取代运行时间中的所有加法常数
- 在修改后的运行次数函数中，只保留`最高阶`项
- 如果最高阶项存在并且不为1，那么去除该项的`系数`

#### 常见大O阶效率表示

###### 常数阶
- 即可以用常数表示算法的执行次数，大O阶时间复杂度为`O(1)`
- 例：1 + 1 + 3

###### 线性阶
- 通常是一层循环结构，随问题规模n的增大线性增长，大O阶时间复杂度为`O(n)`
- 例：2n + 3

###### 平方阶
- 通常是两层循环结构，随问题规模n的增大指数增长，大O阶时间复杂度为`O(n^2)`
- 例：n(n + 1) / 2

###### 对数阶
- 通常是一层优化过的循环结构，随问题规模n的增大对数增长，大O阶时间复杂度为`O(logn)`
- 例：3log(2)n + 3

###### nlogn阶
- 通常是两层优化过的循环结构，随问题规模n的增大对数增长，大O阶时间复杂度为`O(nlogn)`
- 例：3nlog(2)n + 3

###### 指数阶
- 通常是n层循环结构，随问题规模n的增大指数增长，大O阶时间复杂度为`O(2^n)`
- 例：2 ^ n

#### 复杂度大小
> O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(n^3)< O(2^n) < O(n!) < O(n^n)

#### 最坏情况与平均情况
上面关于复杂度的计算得到的都是`最坏`运行时间，是算法最坏的`保障`
有时候我们也会评估算法在不同输入时的平均运行时间，这是我们期望的运行时间

#### 空间复杂度计算
主要评估程序运行时所需的存储`空间大小`，在算法优化时我们可以用`空间换取时间`

- 通常记作 `S(n) = O( f(n) )`，n为问题规模，f(n)为语句关于n所占存储空间的函数
- 表示随问题规模n的`增大`，算法`占用空间`的增长率与f(n)的`增长率相同`
- 通常，随着n的增长，S(n)增长最慢的算法为`最优算法`
