export default function InformationSettings() {
  return (
    <>
      <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
        <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
          <h2 className="text-2xl font-bold color-heading">
            Additional Information
          </h2>
          {/* <div className="relative h-10 overflow-hidden rounded-full bg-base-200 pl-9 dark:bg-dark-base-200">
            <MdSearch className="absolute text-xl -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="block w-full h-full bg-transparent focus:outline-none"
            />
          </div> */}
        </section>
        <section>
          {/* <div className="max-w-lg pt-10">
            <h2 className="mb-4 text-lg font-bold color-heading">Language</h2>
            <div className="mb-4">
              <label
                htmlFor="language"
                className="block mb-2 text-sm font-medium text-gray-300 uppercase"
              >
                display Language
              </label>
              <select className="c-input" id="language">
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>
              </select>
            </div>
          </div>
          <div className="max-w-lg pt-6">
            <h2 className="mb-4 text-lg font-bold color-heading">Data Usage</h2>
            <div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label
                    htmlFor=""
                    className="text-base font-normal color-heading"
                  >
                    Data Saver
                  </label>
                  <p>Virtuoso will use less data if selected</p>
                </div>
                <div>
                  <Switch
                    checked={dataSaver}
                    onChange={() => setDataSaver((v) => !v)}
                    className={`${
                      dataSaver
                        ? 'bg-primary'
                        : 'bg-quarternary dark:bg-dark-quarternary'
                    } relative inline-flex h-7 w-12 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        dataSaver ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div> */}
          <div className="max-w-lg pt-10">
            <h2 className="mb-4 text-lg font-bold color-heading">
              Legal Information
            </h2>
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-base font-normal color-heading">
                  Cookie Policy
                </h3>
                <p>See Cokiee Policy of Virtuoso</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-normal color-heading">
                  Privacy Policy
                </h3>
                <p>See Privacy Policy of Virtuoso</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-normal color-heading">
                  Terms of Services
                </h3>
                <p>See Our Terms of Services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
