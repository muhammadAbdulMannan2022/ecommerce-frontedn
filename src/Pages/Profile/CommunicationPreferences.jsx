// components/Profile/CommunicationPreferences.jsx
const CommunicationPreferences = ({ preferences, setPreferences }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">Communication Preferences</h3>
      <div className="mt-3 space-y-2">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={preferences.emailUpdates}
            onChange={(e) =>
              setPreferences({ ...preferences, emailUpdates: e.target.checked })
            }
          />
          Receive Order Updates via Email
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={preferences.whatsappUpdates}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                whatsappUpdates: e.target.checked,
              })
            }
          />
          Receive Updates via WhatsApp
        </label>
      </div>
    </div>
  );
};

export default CommunicationPreferences;
