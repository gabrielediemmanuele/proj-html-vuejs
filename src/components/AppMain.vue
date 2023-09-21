<script>
//import
import LoveAnimation from "../components/sub-components-main/LoveAnimation.vue";
import AnidioQuick from "../components/sub-components-main/AnidioQuick.vue";
import OurWorks from "../components/sub-components-main/OurWorks.vue";
import OurProcess from "../components/sub-components-main/OurProcess.vue";
import AnidioTeamMembers from "../components/sub-components-main/AnidioTeamMembers.vue";
import AnidioTeamMembersCopy from "../components/sub-components-main/AnidioTeamMembersCopy.vue";
import WhyAnidio from "../components/sub-components-main/WhyAnidio.vue";
import CreateWorlds from "../components/sub-components-main/CreateWorlds.vue";

//export
export default {
  data() {
    return {};
  },

  components: {
    LoveAnimation,
    AnidioQuick,
    OurWorks,
    OurProcess,
    AnidioTeamMembers,
    AnidioTeamMembersCopy,
    WhyAnidio,
    CreateWorlds,
  },
};
</script>

<template>
  <main class="main-container">
    <!--* Agency Skills and features  -->
    <LoveAnimation></LoveAnimation>
    <!--* Agency Scores  -->
    <AnidioQuick></AnidioQuick>
    <!--* Agency Work Gallery -->
    <OurWorks></OurWorks>
    <!--* Agency Process  -->
    <OurProcess></OurProcess>
    <!--* Agency Team Members  -->
    <AnidioTeamMembers></AnidioTeamMembers>
    <!--! copia di prova per lo slider -->
    <AnidioTeamMembersCopy></AnidioTeamMembersCopy>
    <!--* Agency - Partners  -->
    <WhyAnidio></WhyAnidio>
    <!--* Agency Submit Section  -->
    <CreateWorlds></CreateWorlds>
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  margin: 0 auto;
}
</style>
