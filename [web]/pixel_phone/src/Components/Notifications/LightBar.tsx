import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

export const LightBar = () => {
  const handleX = useMotionValue(0);
  const dragControls = useDragControls();

  const progressScaleX = useTransform(handleX, [0, 175], [0, 1]);

  const handleDrag = (e: any) => {
    dragControls.start(e, { snapToCursor: true });
  };

  return (
    <div className="lightBar" onPointerDown={handleDrag}>
      <motion.div className="fillbar" style={{ scaleX: progressScaleX }} />

      <motion.div
        className="controll"
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ left: 0, right: 175 }}
        dragMomentum={false}
        dragElastic={0}
        style={{ x: handleX }}
      />
    </div>
  );
};
