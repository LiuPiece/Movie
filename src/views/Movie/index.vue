<template>
  <div id="main">
    <Header title="喵喵电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link to="/movie/City" tag="div" class="city_name">
          <span>大连</span><i class="fa fa-caret-down" aria-hidden="true"></i> 
        </router-link>
        <div class="hot_switch">
          <router-link to="/movie/nowPlaying" tag="div"  class="hot_item ">正在热映</router-link>
          <router-link to="/movie/comingSoon" tag="div"  class="hot_item">即将上映</router-link>
        </div>
        <router-link to="/movie/Search" tag="div"  class="search_entry">
          <i class="fa fa-search" aria-hidden="true"></i>
        </router-link>
      </div>
       <!-- 清除缓存  二级路由跳转 -->
      <keep-alive>
        <router-view/>
      </keep-alive>
      
    </div>
    <TabBar></TabBar> 
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
  },
};
</script>

<style scoped>
#content .movie_menu{width: 100%; height: 45px; border-bottom: 1px solid #e6e6e6; display: flex; justify-content: space-between; flex-direction: row; white-space: nowrap;}
.movie_menu .city_name{margin-left: 20px; height: 100%; line-height: 45px;}
.movie_menu .city_name.active{color:#ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .city_name.router-link-active{color:#ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .hot_switch{display: flex; height: 100%; line-height: 45px; justify-content: space-between; }
.movie_menu .hot_item{font-size: 15px; color:#666; width: 80px; text-align: center; margin: 0 12px; font-weight: 700;}
.movie_menu .hot_item.active{color: #ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .hot_item.router-link-active{color: #ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .search_entry{margin-right: 20px; height: 100%; line-height: 45px;}
.movie_menu .search_entry.router-link-active{color: #ef4238; border-bottom: 2px solid #ef4238;}
.movie_menu .search_entry i{font-style: 24px; color:red;}
</style>