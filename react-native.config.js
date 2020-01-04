module.exports = {
  // config for a library is scoped under "dependency" key
  dependency: {
    platforms: {
      ios: {
        sharedLibraries: [
          "CoreData.framework",
          "SystemConfiguration.framework",
          "libz.tbd",
          "libsqlite3.0.tbd"
        ]
      }
    }
  }
};
