import rq from "request-promise-native";
import path from "path";
import sharp from "sharp";
import crypto from "crypto";

const links = [
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_fb3e9149c43f7a2e8f8b66cbea7845fe.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_f4b12d402bb36270cd911f4e1fa8bb0c.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_38e26baf417d26bb3548d97bf4872b54.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_5f8a923a0d0ac1e4289ae3be03f94aa2.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_5b371fef4ecafe733ad487a8fae3b9f5.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_fe57052d7cf971f7502daa75a2ca2437.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_922ae83203f6134bae00937d12eab3a2.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_0aa1d7b0e0ac2c6820036b6b3dde3e5b.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_234e7e18549d5eae2ddb012f2bcb203a.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_f9d1438e0536f36e868e691eb0acfc4d.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_ca750af7ed2f0ec3c8e2f019c85f7bab.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_e74b3385c5269da226372df8ae7f500d.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_52f64830161b33289d36edc03f6d2ea6.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_abf5e799b91b9a4dea7f8a7e00106d41.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_1cdc631c83cebd284aa692800b375544.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_cf348b63307220263eff699dc56bd081.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_f6de6d95f600f199c9a674c73cbefbcc.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_d08435f6d51f7ff593c92e7f1394e933.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_1e392d102336226d85cc12bc5dbe1ff0.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_96f7e9009d4f26e30cfd60564021925e.png",
  "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_bfe80e3dafe6686a9dc42df0606bdc9b.png"
];
links.forEach(link => {
  rq.get(link, { encoding: null }).then(val => {
    sharp(val)
      .resize(512, 512)
      .toFile(
        `D:/Documents/icons/${link.substring(
          "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_".length
        )}`
      );
  });
});

const links2 = [
  "https://Bungie.net/img/destiny_content/pgcr/patrol_edz.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/free_roam_tangled_shore.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/raids_leviathan_eater_of_worlds.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_nokris.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/social_farm.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/patrol_nessus.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/rituals_meditation_hijacked.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/gambit_hold.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/raid_beanstalk.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/patrol_Io.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_the_pyramdion.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/rituals_a_garden_world.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/patrol_titan.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_glaive.jpg",
  "https://Bungie.net/img/theme/destiny/bgs/pgcrs/placeholder.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_the_arms_dealer.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_solitude.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_combustion.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_the_burnout.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/free_roam_dreaming_city.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_echo.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_omega.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/rituals_a_deadly_trial.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_savanthuns_song.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_fury.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_awakening.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/freeroam_mercury.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/conceptual_iron_banner.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_ritual.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/black_armory-ba_quests.nux_cinematic.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_xol.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/gambit_trinity.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/playlist_breakthrough.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/rituals_tree_of_probabilities.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_jalapeno.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/gambit_badlands.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/gambit_scrap.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/raid_gluttony.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_meltdown.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_exodus_crash.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_glee.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_aries.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/menagerie.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/verdant_forest.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_utopia.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_lake_of_shadows.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_six.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/black_armory_forge_izanami.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_pepperoni.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_distant_shore.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/social_traveler.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_zerohour.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_wormhaven.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/free_roam_polaris.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_hull.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_bannerfall.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_payback.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_respite.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_street.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/raid_greed.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_bacon.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_gemini.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_inverted_spire.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_adieu.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/gambit_ledge.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/reckoning.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_riptide.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_queensfavor.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_cliffside.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_uldren.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_hope.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_the_gateway.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/raid_eclipse.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_spark.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_peak.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/vanguard_strike_playlist.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_1AU.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/black_armory-gunslinger.boss_battle.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/gambit_dreamycliffs.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_tree_of_probabilities.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_virgo.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/strike_taurus.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_unbroken.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_demontower.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/conceptual_trials_of_the_nine.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_elevator.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_pacifica.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_toxic.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_homecoming.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/heroic_strike_playlist.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_tunnel.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/rituals_deep_storage.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/playlist_mayhem.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_sacrilege.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_observatory.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_grove.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_chosen.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/playlist_doubles.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_prisonbreak.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_reveal.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_radiant_cliffs.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/black_armory-gunslinger.hive_ritual.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_ness.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_looped.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/social_spire.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_midtown.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_katana.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_shaft.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/social_spiders_palace.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/black_armory_forge_gofannon.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_a_garden_world.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/pvp_longshot_2.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/campaign_larceny.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_bridge.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/black_armory-bars.playlist_edz_oldtown_forge-35a17r14q.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/black_armory-bars.1583h7905n-playlist_edz_crack_forge.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_rouse.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/crucible_slag.jpg",
  "https://Bungie.net/img/destiny_content/pgcr/mission_labyrinth.jpg"
];

links2.forEach(link => {
  rq.get(link, { encoding: null }).then(val => {
    const image = sharp(val);
    image
      .metadata()
      .then(function(metadata) {
        let upscaleRatio = 1;
        if (metadata.width < 1024) {
          upscaleRatio = 1024 / metadata.width;
        }
        if (metadata.height < 1024) {
          upscaleRatio = 1024 / metadata.height;
        }
        console.log(metadata.width);
        console.log(metadata.height);
        console.log(upscaleRatio);
        if (upscaleRatio == 1) {
          return image.jpg().toBuffer();
        }
        return image
          .resize(Math.round(metadata.width * upscaleRatio), Math.round(metadata.height * upscaleRatio))
          .toFormat("jpg")
          .toBuffer();
      })
      .then(data => {
        sharp(data).toFile(
          `D:/Documents/icons/${crypto
            .createHash("md5")
            .update(path.parse(new URL(link).pathname).name)
            .digest("hex")}.jpg`
        );
      });
  });
});
