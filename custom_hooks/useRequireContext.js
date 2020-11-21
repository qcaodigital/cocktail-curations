export default function useRequireContext(path, recursive, regex){
    function importAll(requireContext){
        return requireContext.keys().map(files => files);
    }
    return importAll(require.context(path, recursive, regex))
}